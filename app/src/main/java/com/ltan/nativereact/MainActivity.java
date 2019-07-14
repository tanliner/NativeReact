package com.ltan.nativereact;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.start_RNA_activity).setOnClickListener(v -> {
            // Intent intent = new Intent(MainActivity.this, SecActivity.class);
            Intent intent = new Intent(MainActivity.this, RNActivity.class);
            startActivity(intent);
        });

        findViewById(R.id.start_RNB_activity).setOnClickListener(v -> {
            // Intent intent = new Intent(MainActivity.this, SecActivity.class);
            // Intent intent = new Intent(MainActivity.this, RNActivity.class);
            Intent intent = new Intent(MainActivity.this, RNBActivity.class);
            startActivity(intent);
        });
    }
}
