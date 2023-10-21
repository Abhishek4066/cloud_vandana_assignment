package codevandan.assignment;

import java.util.Arrays;

public class ShuffelTheArray {
	/*
	 * Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
	 */

	public static void shuffle(int arr[]) {
		int random;
		int temp;

		for (int i = arr.length - 1; i >= 0; i--) {
			random = (int) (Math.random() * (i + 1));
			temp = arr[random];
			arr[random] = arr[i];
			arr[i] = temp;
		}
	}

	public static void main(String[] args) {
		int[] arr = { 1, 2, 3, 4, 5, 6, 7 };

		System.out.println("Before Shuffling: " + Arrays.toString(arr));
		shuffle(arr);
		System.out.println("After Shuffling: " + Arrays.toString(arr));

	
	}

}
