//{ Driver Code Starts
// C++ program for pendulum arrangement of numbers
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// Returns pendulam arrangement of arr[]
vector<int> pendulumArrangement(int arr[], int n) {
    sort(arr,arr+n);
    int res[n];
    vector<int> ped;
    int m;
    if(n%2==0){
        m=(n-1)/2;

    }else{
        m=n/2;
    }
    
    res[m]=arr[0];
    for(int i=1;i<n;i+=2){
        int j=i+1;
        int k=m+i;
        int l=m-i;
        res[k]=arr[i];
        res[l]=arr[j];
        
        
    }
    for(int i=0;i<n;i++){
        ped.push_back(res[i]);

    }
    return ped;
    
    
    
}


//{ Driver Code Starts.

int main() {
    int t, i;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        int arr[n];
        for (i = 0; i < n; i++) cin >> arr[i];

        vector<int> ans = pendulumArrangement(arr, n);
        //for (auto it : ans) cout << it << " ";
        //cout << endl;
        for(int i=0;i<n;i++){
            cout<<ans[i]<<" ";
        }
    }
    return 0;
}

// } Driver Code Ends