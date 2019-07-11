package com.ltan.nativereact;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.start_sec_activity).setOnClickListener(v -> {
            // Intent intent = new Intent(MainActivity.this, SecActivity.class);
            // Intent intent = new Intent(MainActivity.this, RNActivity.class);
            Intent intent = new Intent(MainActivity.this, RN2Activity.class);
            startActivity(intent);
        });
    }
}
