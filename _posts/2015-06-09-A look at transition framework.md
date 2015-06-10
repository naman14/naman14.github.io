---
layout: post
title: A look at the Transition framework of Android
comments: true
permalink: transition-framework-android
---
With all the animations being added in the Google Play apps, I was wondering how they were being used and then I found out the Transition Framework of Android. After looking a little deeper in it, I was able to create the animation being used in the Google play apps.

Here, I will be explaining a liitle about the usage of Transition Framework of Android to create a variety of animations.

First of all,the transition framework can be used in either of the following two ways-

* Animating same views(shared elements) between different activities(fragments)
* Animate views between scenes of same activity

The transition framework can also be used to animate the whole views  between different activities.An example of creating a explode animation while launching an intent is shown below:
{% highlight java %}
activity.getInstance().getWindow().setExitTransition(new Explode());
ActivityOptions options=ActivityOptions.makeSceneTransitionAnimation(activity.getInstance());
context.startActivity(intent,options.toBundle());
{% endhighlight %} 

Animating views between scenes of same activity is pretty easy and is well documented at [developer.android.com](http://developer.android.com/training/transitions/index.html).
Scenes are basically the state of a view hierachy at a particular time.We can have a initial view hierachy(Scene A) when activity is launched and then we can create a different view hierachy(Scene B) and we can tell the transition framework to animate between these two scenes.The scenes can be loaded either from a layout resource file or from a group of views in existing code.
                 

##Animating shared elements between activities

Shared elements are the common views between two activities where we want to apply tranitions.The transition framework will automatically animate changes to the views containing same `android:transitionName` attribute.

When launching another activity,specify the views where we want to  perform transition and pass it as a bundle. The launching activity and the launched activity should have common views to perform transition on that pair of views.

{% highlight java %}
 Intent intent=new Intent(mContext, DetailActivity.class);
 ActivityOptions options=ActivityOptions.makeSceneTransitionAnimation(MainActivity.getInstance(), Pair.create((View) cover, "coverTransition"));
mContext.startActivity(intent,options.toBundle());
{% endhighlight %}

`cover` is the view in the launching activity and `coverTransition` is the value of the `android:transitionName`.In the launched activity,any view having the same `android:transitionName:"coverTransition"` attribute will be where the transition will be applied.

Note that if no custom transition is supplied, the transition framework will apply the `autoTransition` which will animate the views in the way framework thinks is best.

Next we will see how to use custom transitions and sharedElementCallbacks to create advanced transition changes to replicate the animations of Google Play Games app.


We will specify the transition in our theme. Add this attribute to your v21 theme
{% highlight xml %}
<item name="android:windowSharedElementEnterTransition">@transition/shared_element</item>
{% endhighlight %}


###res/transition/shared_element.xml

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<!-- --A set of transitions on two views performed together <!-- -->
<transitionSet
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:transitionOrdering="together"
    android:duration="240">

    <transitionSet   >
    <!-- --A custom transition defined in PlayTransition class <!-- -->
        <transition
            class="com.naman14.playanimations.PlayTransition"/>
        <targets>
         <!-- --If we want to exclude a particular view from the transition <!-- -->
            <target android:excludeId="@id/icon" /> />
        </targets>
        </transitionSet>
<!-- --We have left this one upto transition Framework <!-- -->
    <autoTransition/>

</transitionSet>
{% endhighlight %}

Launch the intent with passing the ActivityOptions as bundle.
{% highlight java %}
 Intent intent=new Intent(mContext, DetailActivity.class);
 //Here we are giving two views to the transition framework to animate
 ActivityOptions options=ActivityOptions.makeSceneTransitionAnimation(MainActivity.getInstance(), Pair.create((View) cover, "coverTransition"),Pair.create((View) icon, "iconTransition"));
mContext.startActivity(intent,options.toBundle());
{% endhighlight %}

Now,our transition will work but we will not get the same effect as the Google Play Games animation. When transition framework applies transition between two views, 
it immediately changes the initial view to the target view before even starting the animation(And probably that will be necessary as it doesn't actually moves view from one layout to another layout).So if we have a square image view in first activity and a CircularImageView in second activity with same transitionName value and when intent is fired,the square view will already be converted into circular view before even starting the transition and then further changes will be animated.

So if we want to achieve the rquired effect, we will have to save the bitmap before transition starts otherwise there will not be a shrinking effect.

In the launching activity-
{% highlight java %}
 getActivity().setExitSharedElementCallback(new SharedElementCallback() {
            @Override
            public Parcelable onCaptureSharedElementSnapshot(View sharedElement, Matrix viewToGlobalMatrix, RectF screenBounds) {
                int width = Math.round(screenBounds.width());
                int height = Math.round(screenBounds.height());
                Bitmap bitmap = null;
                if (width > 0 && height > 0) {
                    Matrix matrix = new Matrix();
                    matrix.set(viewToGlobalMatrix);
                    matrix.postTranslate(-screenBounds.left, -screenBounds.top);
                    bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
                    Canvas canvas = new Canvas(bitmap);
                    canvas.concat(matrix);
                    sharedElement.draw(canvas);
                }
                return bitmap;
            }
        });
   {% endhighlight %}
And then in the launched activity we can use `setEnterSharedElementCallback` to properly move the captured bitmap to target view.

##Notes

Transition framework was introduced in API level 19 and was further updated with many new additions in API level 21. Simple scene transitions and activity transitions will work for 19+ however SharedElementCallbacks were introduced in Lollipop. So be sure to check for Build version before using transition framework.

There is also a library on Github([Transitions-Everywhere](https://github.com/andkulikov/transitions-everywhere)) which is a backport of Transition Framework upto 2.2+ 

* The custom transition class can be found here- [PlayTransition.java](https://github.com/naman14/PlayAnimations/blob/master/app/src/main/java/com/naman14/playanimations/PlayTransition.java)

* The whole project with full code is available on [Github](https://github.com/naman14/PlayAnimations)

* A sample apk can be found on [Google Play](https://play.google.com/store/apps/details?id=com.naman14.playanimations&hl=en)

--------
     
     
**Posted by `Naman Dwivedi` on `09 Jun 2015`**

**Tags-   `Android`  ,`UI`**


 



