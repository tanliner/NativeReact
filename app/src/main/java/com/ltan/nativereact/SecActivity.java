package com.ltan.nativereact;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class SecActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sec);

        findViewById(R.id.tv_sec_show_args).setOnClickListener(v -> {
            startActivity(new Intent(SecActivity.this, RNActivity.class));
        });
    }
}
