class secondLargest 
{
	public static void main(String[] args) 
	{
		int[] arr={2,33,1,9,8,0};
		sort(arr);
		System.out.println(java.util.Arrays.toString(arr));
		System.out.println(arr[arr.length-2]);
	}
	public static void sort(int[] arr){
		for(int i=0;i<arr.length-1;i++){
			for(int j=i+1;j>0;j--){
				if(arr[j] >arr[j-1]){
					int temp=0;
					temp=arr[j];
					arr[j]=arr[j-1];
					arr[j-1]=temp;
				}else{
					break;
				}
			}
		}
	}
}
