package rusk.david.weightrep;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class OneRepMaxActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_one_rep_max);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.one_rep_max, menu);
		return true;
	}

}
