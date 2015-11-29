---
layout: post
title: AndroidSlidingUpPanel with RecyclerView
comments: true
related: false
permalink: slidinguppanel-recyclerview
---

Recently,I was working on the [Chestream](http://chestream.com) Android app and as it turns out,AndroidSlidingUpPanel doesn't play well with scrolling contents and since we were using RecyclerView inside SlidingPanelLayout,there were some conflicts between the srcolling intercepting of slidingpanel and recyclerview.The problem was that when scrolling inside the recyclerview,it did not scroll instead the panel starts sliding.However for some reason,if scrolled very slowly recyclerview did started scrolling but it was bad user experience.The problem is justified as panel is supposed to slide if it is dragged.There is also a method `setDragView` in SlidingPanelLayout by which we can restrict the views from where only the panel can be dragged but unfortunately that doesn't seem to work and even if it works,it isn't the perfect solution to the problem as then the user wouldn't be able to drag the panel from the whole recyclerview.

The ideal solution to this should be that the user will be able to scroll the recyclerview as long as it is scrollable and when the top item of recyclerview is reached,the panel should start sliding.We will see how to implement such functionality with AndroidSlidingUpPanel.This should work on ScrollViews and ListViews also.

On first look,it would seem to override the `onInterceptTouchEvent` in SlidingUpPanelLayout to implement your custom implementation (And what most of the stackoverflow answers relating to this suggest) but unfortunately this wouldn't work in our case as once the child view's `onTouchEvent` returns `true`,`onInterceptTouchEvent` would no longer be called.So our first step would be to remove `onInterceptTouchEvent` method completely.

Add these variables to `SlidingUpPanelLayout.java`
{% highlight java %}
View mScrollingView;
boolean isChildHandlingTouch = false;
float mPrevMotionX;
float mPrevMotionY;
{% endhighlight %}

Next up is to give SlidingUpPanelLayout the reference to our RecyclerView.
Add this method to `SlidingUpPanelLayout.java`-
{% highlight java %}
public void setScrollingView(View scrollingView) {
    mScrollingView = scrollingView;
}
{% endhighlight %}

Next step is to determine if our RecyclerView is still scrolling or has reached the top item and its time to hand over scrolling to SlidingPanelLayout. It took me some time to find it but LayoutManager of RecyclerView has a direct method to get the position of the first visible item on the screen. Similarly,ListView and ScrollView also has such methods to get the scrolling position.
{% highlight java %}
private boolean isChildScrolling() {
    if (mScrollingView == null)
        return false;

    //for recyclerview  
    if (mScrollingView instanceof RecyclerView) {
          RecyclerView rv = (RecyclerView) mScrollingView;

           LinearLayoutManager layoutManager = ((LinearLayoutManager) rv.getLayoutManager());
           int firstVisiblePosition = layoutManager.findFirstVisibleItemPosition();

            if (firstVisiblePosition > 0)
                return true;

    //findFirstVisibleItemPosition returns the position even if 1dp of the item view is visible
    //so if even some of the first item view is visible firstVisiblePosition>0 would be false
    //however in that case the view can still scroll a little upto the actual height of the item.
    //take care of that with below code
            View v = rv.getChildAt(0);
            int top = (v == null) ? (0) : (firstVisiblePosition * lv.getHeight() - v.getTop());
            return top > 0;
        }

    //haven't tested these but should work

      //for listview
    else if (mScrollingView instanceof ListView) {
        ListView lv = (ListView) mScrollingView;

        if (lv.getFirstVisiblePosition() > 0)
            return true;

        View v = lv.getChildAt(0);
        int top = (v == null) ? (0) : (-v.getTop() + lv.getFirstVisiblePosition() * lv.getHeight());
        return top > 0;
    }

    //for scrollview
    else  if (mScrollingView instanceof ScrollView) {
          return (mScrollingView.getScrollY() > 0);
      }

    return false;
}
{% endhighlight %}

Next modify the `onTouchEvent` of SlidingUpPanelLayout to the following-
{% highlight java %}
@Override
   public boolean onTouchEvent(MotionEvent ev) {
       if (!isSlidingEnabled()) {
           return super.onTouchEvent(ev);
       }

           mDragHelper.processTouchEvent(ev);

           //add the following code
           final int action = ev.getAction();
           boolean captureTouch = false;

           switch (action & MotionEvent.ACTION_MASK) {
               case MotionEvent.ACTION_UP: {
                   final float x = ev.getX();
                   final float y = ev.getY();
                   final float dx = x - mInitialMotionX;
                   final float dy = y - mInitialMotionY;
                   final int slop = mDragHelper.getTouchSlop();
                   View dragView = mDragView != null ? mDragView : mSlideableView;

                   if (dx * dx + dy * dy < slop * slop &&
                           isDragViewUnder((int) x, (int) y) &&
                           !isScrollingViewUnder((int) x, (int) y)) {

                       if ((!isPanelExpanded()) && (!isPanelAnchored())) {
                           anchorPanel();
                       } else {
                           collapsePanel();
                       }
                       break;
                   }
                   break;
               }
           }

           return captureTouch;

   }
   {% endhighlight %}

   Add the `isScrollingViewUnder` as follows (same as the `isDrageViewUnder` method)-
   {% highlight java %}
   private boolean isScrollingViewUnder(int x, int y) {
    if (mScrollingView == null)
        return false;

    int[] viewLocation = new int[2];
    mScrollingView.getLocationOnScreen(viewLocation);
    int[] parentLocation = new int[2];
    this.getLocationOnScreen(parentLocation);
    int screenX = parentLocation[0] + x;
    int screenY = parentLocation[1] + y;
    return screenX >= viewLocation[0] &&
           screenX < viewLocation[0] + mScrollingView.getWidth() &&
           screenY >= viewLocation[1] &&
           screenY < viewLocation[1] + mScrollingView.getHeight();
   }
   {% endhighlight %}

   And then finally add the following `dispatchTouchEvent` method to identify if we want to handle the touch event.
   We want to be able to handle the case where a child begins handling a touch event, but then the parent takes over. If we rely on `onInterceptTouchEvent`, we lose control of the touch as soon as the child handles the event.
   (see [http://stackoverflow.com/a/22490810/3316330](http://stackoverflow.com/a/22490810/3316330) for more details)

   {% highlight java %}
   @Override
public boolean dispatchTouchEvent(MotionEvent ev) {
    if (mScrollingView == null)
        return super.dispatchTouchEvent(ev);

    final int action = MotionEvent.getActionMasked(ev);

    final float x = ev.getX();
    final float y = ev.getY();

    if (action == MotionEvent.ACTION_DOWN) {

        mDragHelper.shouldInterceptTouchEvent(ev);

        mInitialMotionX = mPrevMotionX = x;
        mInitialMotionY = mPrevMotionY = y;

        isChildHandlingTouch = false;
    } else if (action == MotionEvent.ACTION_MOVE) {
        float dx = x - mPrevMotionX;
        float dy = y - mPrevMotionY;
        mPrevMotionX = x;
        mPrevMotionY = y;

        // If the scroll view isn't under the touch, pass the
        // event along to the dragView.
        if (!isScrollingViewUnder((int) x, (int) y))
            return this.onTouchEvent(ev);

        // Dragging Down
        if (dy > 0) {
            // Is the child still scrolling?
            // Then let the child handle it.
            if (isChildScrolling()) {
                isChildHandlingTouch = true;
                return super.dispatchTouchEvent(ev);
            }

            // If the child was handling touch previously
            // Then we need to rearrange things so that the sliding panel gets a proper down event.
            if (isChildHandlingTouch) {
                // Send an 'UP' event to the child.
                MotionEvent up = MotionEvent.obtain(ev);
                up.setAction(MotionEvent.ACTION_UP);
                super.dispatchTouchEvent(up);
                up.recycle();

                // Send a 'DOWN' event to the panel.
                ev.setAction(MotionEvent.ACTION_DOWN);
            }

            isChildHandlingTouch = false;
            return this.onTouchEvent(ev);

        }
        // Dragging Up
         else if (dy < 0) {
            // If panel is not fully expanded,we will handle drag here
            if (mSlideOffset < 1.0f) {
                isChildHandlingTouch = false;
                return this.onTouchEvent(ev);
            }

            // If the panel was handling touch previously
            // Then we need to rearrange things so that the child gets a proper down event.
            if (!isChildHandlingTouch) {
                mDragHelper.cancel();
                ev.setAction(MotionEvent.ACTION_DOWN);
            }

            isChildHandlingTouch = true;
            return super.dispatchTouchEvent(ev);
        }
    } else if ((action == MotionEvent.ACTION_CANCEL) ||
            (action == MotionEvent.ACTION_UP)) {
        if (!isChildHandlingTouch) {
            final float dx = x - mInitialMotionX;
            final float dy = y - mInitialMotionY;
            final int slop = mDragHelper.getTouchSlop();

            if ((mIsUsingDragViewTouchEvents) && (dx * dx + dy * dy < slop * slop))
                return super.dispatchTouchEvent(ev);

            return this.onTouchEvent(ev);
        }
    }

    return super.dispatchTouchEvent(ev);
}
   {% endhighlight %}

   That's it! We just need to set our scrollingView to the SlidingUpPanelLayout.
   Add this line to give the sliding layout the reference to our RecyclerView.
   {% highlight java %}
   mSlidingPanelLayout.setScrollingView(mRecyclerView);
   {% endhighlight %}

   This should solve the scrolling problem when using RecyclerView with AndoridSlidingUpPanel.

   I also made a quick gist of modified `SlidingUpPanelLayout.java` -[https://gist.github.com/naman14/35d899ab45bf3ce836a8](https://gist.github.com/naman14/35d899ab45bf3ce836a8)

   --------
   >####Update
   >As of version 3.1.0 released on 19 July,AndroidSlidingUpPanel has added
   >`scrollableView` to support nested scrolling in children
   >but only scrollview and listview are supported for now.
   >[https://github.com/umano/AndroidSlidingUpPanel/pull/503](https://github.com/umano/AndroidSlidingUpPanel/pull/503).
   >
   >EDIT : RecyclerView support is also added now

   --------


   **Posted by `Naman Dwivedi` on `03 July 2015`**

   **Tags-   `Android`  ,`UI`  ,`AndroidSlidingUpPanel`**
