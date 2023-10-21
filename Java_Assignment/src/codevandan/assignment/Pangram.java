package codevandan.assignment;

import java.util.HashSet;
import java.util.Set;

public class Pangram {

	public static boolean checkIfPangram(String input) {
		
		Set<Character> alphaset = new HashSet();
		
		for(int i='a'; i <='z'; i++) 
		{
			alphaset.add((char)i);
		}
			
		for(int i=0; i<input.length();i++) 
		{
			alphaset.remove(input.charAt(i));
			if(alphaset.isEmpty())
				return true;
		}
		return false;
	
	}

	public static void main(String[] args) {
		
		System.out.println(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
	}

}
