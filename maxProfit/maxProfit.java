package maxProfit;

public class maxProfit {
    public static void main(String[] args) {    
        int[] arr = {7,6,4,3,1};
        int x = maxProfit(arr);
        System.out.println(x);
    }

    public static int maxProfit(int[] prices) {
        // if(prices.length < 2) return 0;
        // int result = 0;
        // int minTobuy = 0;
        // for (int i = 1; i < prices.length - 1; i++) {
        //     if(prices[minTobuy] > prices[i]) minTobuy = i;
        // }
        // int maxToSell = minTobuy + 1;
        // for (int i = minTobuy + 2; i < prices.length; i++) {
        //     if(prices[maxToSell] < prices[i]) maxToSell = i;
        // }
        // if(prices[maxToSell] - prices[minTobuy] > result) return prices[maxToSell] - prices[minTobuy];
        // return  result;
        int max = 0;
        for (int i = 0; i < prices.length - 1; i++) {
            for (int j = i + 1; j < prices.length; j++) {
                if(prices[j] - prices[i] > max) max = prices[j] - prices[i];
            }
        }
        return max;
    }
}
