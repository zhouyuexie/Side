package com.side.wave;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;
import com.side.R;


/**
 * Created by Administrator on 2016/11/3 0003.
 */

public class WaveLayout extends FrameLayout {

    private TextView mTextView;
    private WaveView mWaveView;
    private int mHeadWidth;
    private String mNormalText = "查看更多";
    private String mEndText = "释放查看";
    private float percentage;

    public WaveLayout(Context context) {
        this(context, null);
    }

    public WaveLayout(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public WaveLayout(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        addView(View.inflate(getContext(), R.layout.layout_water, null));
        mTextView = fv(R.id.text);
        mWaveView = fv(R.id.wave);

        mHeadWidth = mWaveView.dip2px(18);
        mWaveView.setHeadWidth(mHeadWidth);

//        mTextView.setTranslationX(mHeadWidth);
//        mWaveView.setTranslationX(mHeadWidth);

    }

    private <T> T fv(int id) {
        return (T) findViewById(id);
    }

    public void setPercentage(float percentage) {
        this.percentage = percentage;
        if (percentage >= 100) {
            mTextView.setText(mEndText);
        } else {
            mTextView.setText(mNormalText);
        }
        int tx = mWaveView.setWaveWidth((int) percentage) - mHeadWidth;
        if (false){
            mTextView.setTranslationX(mHeadWidth);
            mWaveView.setTranslationX(mHeadWidth);
        }else if (tx <= 0){
            mTextView.setTranslationX(-tx);
            mWaveView.setTranslationX(-tx);
        }
    }

    public void setNormalText(String normalText) {
        mNormalText = normalText;
        if (percentage < 100)
            mTextView.setText(mNormalText);
    }


    public void setEndText(String endText) {
        mEndText = endText;
        if (percentage >= 100)
            mTextView.setText(mEndText);

    }

    public void setColor(int color) {
        mWaveView.setColor(color);
    }

    public void setRectWidth(int width) {
        mWaveView.setHeadWidth(width);
    }


    public void setWaveWidth(int waveWidth) {
        mWaveView.setWaveWidth(waveWidth);
    }

    public void setTextSize(float size){
        mTextView.setTextSize(mWaveView.dip2px(size));
    }

}
