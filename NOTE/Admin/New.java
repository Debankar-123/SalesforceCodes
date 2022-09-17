class New 
{
	public static void main(String[] args) 
	{
		int[] arr={11,23,65,23,76,92,14,0,37,18};

		int temp=0;
		for(int i=0;i<arr.length;i++){
			for(int j=i+1;j<arr.length;j++){
				if(arr[i]<arr[j]){
					temp=arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
		System.out.println(java.util.Arrays.toString(arr));
	}
}
