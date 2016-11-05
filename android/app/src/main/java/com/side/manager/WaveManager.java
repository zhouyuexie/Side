package com.side.manager;

import android.graphics.Color;


import com.facebook.drawee.generic.RoundingParams;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.side.wave.*;
/**
 * Created by Administrator on 2016/11/4 0004.
 */

public class WaveManager extends SimpleViewManager<WaveLayout> {

    public static final String REACT_CLASS = "MWaveLayout";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WaveLayout createViewInstance(ThemedReactContext reactContext) {
        WaveLayout waveLayout = new WaveLayout(reactContext);
//        waveLayout.setRectWidth(100);
//        waveLayout.setWaveWidth(50);
//        waveLayout.setNormalText("哈哈哈");
        return waveLayout;

    }

    @ReactProp(name = "texts_normal")
    public void setNormalText(WaveLayout view, String text) {
        view.setNormalText(text);
    }
    @ReactProp(name = "text_end")
    public void setEndText(WaveLayout view, String text) {
        view.setEndText(text);
    }

    @ReactProp(name = "color")
    public void setColor(WaveLayout view, String color) {
        view.setColor(Color.parseColor(color));
    }

    @ReactProp(name = "rect_width", defaultFloat = 0)
    public void setRectWidth(WaveLayout view,float width){
        view.setRectWidth((int) width);
    }
    @ReactProp(name = "wave_width", defaultFloat = 0)
    public void setWaveWidth(WaveLayout view,float waveWidth){
        view.setWaveWidth((int) waveWidth);
    }

    @ReactProp(name = "percentage", defaultFloat = 0)
    public void setPercentage(WaveLayout view,float percentage){
        view.setPercentage(percentage);
    }

    @ReactProp(name = "textsize", defaultFloat = 0)
    public void setTextSize(WaveLayout view,float size){
        view.setTextSize(size);
    }

//
//    @ReactProp(name = "backcolor")
//    public void setBackColor(WaveLayout view,String width){
////        view.setBackground(width);
//    }

}