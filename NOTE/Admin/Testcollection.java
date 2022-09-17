import java.util.*;
public class Testcollection {
public static void main(String[] args) {
		int[] arr={1,3,2,3,2};
		System.out.println(Arrays.toString(arr));
		
	 List<Integer> lst=new ArrayList<>();
	 lst.add(-10);
	 lst.add(30);
	 lst.add(100);
	 lst.add(70);
	 lst.add(90);
	 System.out.println(lst);
	System.out.println();
		TreeSet ts=new TreeSet(lst);
		System.out.println(ts);
		TreeSet ts1=(TreeSet)ts.descendingSet();
		System.out.println(ts1);
}
}