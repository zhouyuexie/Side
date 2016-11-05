package com.side.wave;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.util.AttributeSet;
import android.view.View;



/**
 * Created by cjj on 2015/8/5.
 * 绘制贝塞尔来绘制波浪形
 */
public class WaveView extends View {
    private int waveWidth;
    private int headWidth;
    Path mPath;


    Paint mPaint;
    private float mScale;

    public WaveView(Context context) {
        this(context, null, 0);
    }

    public WaveView(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public WaveView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        mPath = new Path();
        mPaint = new Paint();
        mPaint.setColor(Color.parseColor("#1A000000"));

        mPaint.setAntiAlias(true);
        mScale = getResources().getDisplayMetrics().density;
        // 获取位图
//        bitmapDis = BitmapFactory.decodeResource(getResources(), R.drawable.gg);
    }

    public int getHeadWidth() {
        return headWidth;
    }

    public void setHeadWidth(int headWidth) {
        this.headWidth = headWidth;
    }

    public int getWaveWidth() {
        return waveWidth;
    }

    public int setWaveWidth(int waveWidth) {
        int i = (int) (dip2px(waveWidth) *0.3);
        this.waveWidth = i;
        invalidate();
        return i;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        //重置画笔
        mPath.reset();
        canvas.translate(getMeasuredWidth(), 0);
//        mPath.lineTo(0, 0);
        mPath.moveTo(-headWidth, 0);
        mPath.quadTo(-headWidth + -waveWidth, getMeasuredHeight() /2, -headWidth, getMeasuredHeight());
//        mPath.lineTo(0, getMeasuredHeight());
        canvas.drawPath(mPath, mPaint);
        canvas.drawRect(- headWidth,0,0,getMeasuredHeight(),mPaint);

//        int gaoduyiban = mViewHeight /2;
//        int wwww = 500;
//        int qugaodu = 400;
//        canvas.translate(mViewWidth , gaoduyiban); //移动画笔中心，默认是x：0，Y：0；修改x：控件的宽度，Y：控件高度一半
//        mPath.lineTo(0, -gaoduyiban);// 矩形右上角
//        mPath.moveTo(-wwww, -gaoduyiban); //矩形左上角，曲线开始的位置
//        mPath.quadTo(-qugaodu+-wwww, 0, -wwww, gaoduyiban); // 曲线中间，曲线结束
//        mPath.lineTo(0, gaoduyiban);  // 矩形右下角
//        canvas.drawPath(mPath, mPaint);

    }

    public int dip2px( float dipValue) {
        return (int) (dipValue * mScale + 0.5f);
    }

    public void setColor(int color) {
        mPaint.setColor(color);
        invalidate();
    }
}
