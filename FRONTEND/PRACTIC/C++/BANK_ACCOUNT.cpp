<<<<<<< HEAD
   #include<iostream>
using namespace std;
class bank_account{
	private:
		double account_number;
		double account_balance;
		
		public:
			bank_account(double acc_no,double acc_bal){
				account_number=acc_no;
				account_balance=acc_bal;
			}
			void deposit(double amount){
				account_balance+=amount;
			}
			
			void withdraw(double amount){
				if(account_balance<=0){
					cout<<"account balance is less than withdraw amount"<<endl;
					cout<<"account_balance: "<<account_balance;
				}else if(account_balance>0&&account_balance>amount){
					account_balance-=amount;
				}else{
					cout<<"account balance is less than withdraw amount"<<endl;
//					cout<<"account_balance: "<<account_balance;
				}
					
			}
			double getbalance(){
				cout<<
				cout<<"account balance: ";
				return account_balance;
			}
		
};
int main(){
	bank_account bnk_acc(1060,1000);
	bnk_acc.deposit(500);
	cout<<bnk_acc.getbalance()<<endl;
	bnk_acc.withdraw(1400);
	cout<<bnk_acc.getbalance()<<endl;
	bnk_acc.withdraw(90);
	cout<<bnk_acc.getbalance()<<endl;
	bnk_acc.withdraw(90);
	cout<<bnk_acc.getbalance()<<endl;
	
	
	
	
	
}
=======
   #include<iostream>
using namespace std;
class bank_account{
	private:
		double account_number;
		double account_balance;
		
		public:
			bank_account(double acc_no,double acc_bal){
				account_number=acc_no;
				account_balance=acc_bal;
			}
			void deposit(double amount){
				account_balance+=amount;
			}
			
			void withdraw(double amount){
				if(account_balance<=0){
					cout<<"account balance is less than withdraw amount"<<endl;
					cout<<"account_balance: "<<account_balance;
				}else if(account_balance>0&&account_balance>amount){
					account_balance-=amount;
				}else{
					cout<<"account balance is less than withdraw amount"<<endl;
//					cout<<"account_balance: "<<account_balance;
				}
					
			}
			double getbalance(){
				cout<<
				cout<<"account balance: ";
				return account_balance;
			}
		
};
int main(){
	bank_account bnk_acc(1060,1000);
	bnk_acc.deposit(500);
	cout<<bnk_acc.getbalance()<<endl;
	bnk_acc.withdraw(1400);
	cout<<bnk_acc.getbalance()<<endl;
	bnk_acc.withdraw(90);
	cout<<bnk_acc.getbalance()<<endl;
	bnk_acc.withdraw(90);
	cout<<bnk_acc.getbalance()<<endl;
	
	
	
	
	
}
>>>>>>> origin/main
