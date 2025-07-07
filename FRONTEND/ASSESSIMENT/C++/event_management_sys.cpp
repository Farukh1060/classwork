#include<iostream>
#include<cmath>
using namespace std;

class wedding {
private:
    string first_name;
    string last_name;
    int number_of_guests;
    double number_of_minutes;

public:
    void wedding_data() {
    	//taking input for above member
        cout << "enter the customer first and last name: " << endl;
        cin >> first_name >> last_name;

        cout << "enter the number of guests: " << endl;
        cin >> number_of_guests;
        cout << "\n\n";
        cout << "enter the number of minutes in the event: " << endl;
        cin >> number_of_minutes;
    }
   	//
//    void set_name(string f_n, string l_n) {
//        first_name = f_n;
//        last_name = l_n;
//    }

	// geting name to use out of class
    string get_name() {
        return first_name + " " + last_name;
    }

    int get_number_of_guests() {
        return number_of_guests;
    }

    double get_number_of_minutes() {
        return number_of_minutes;
    }
};

class event_cost_estimation {
public:
	
    const double CostPerHour = 18.50;
    const double CostPerMinute = 0.40;
    const double CostOfDinner = 20.70;
};

class feveral {
public:
    feveral() {
        cout << "feveral event";
    }
};

int main() {
    wedding w; //making object of weding;
    event_cost_estimation ee;//maing object of event cost estimation
    string event;
    cout << "**************************event management system**************************" << endl;
    cout << "enter the name of event :" << endl;
    cin >> event;
    
    if (event == "wedding") {
        w.wedding_data();
    } else if (event == "feveral") {
        feveral();
    } else {
        cout << "wrong input";
    }

    // costing
    double NoOfServer = ceil(static_cast<double>(w.get_number_of_guests()) / 20);
    double cost1 = (w.get_number_of_minutes() / 60) * ee.CostPerHour;
    double cost2 = (static_cast<int>(w.get_number_of_minutes()) % 60) * ee.CostPerMinute;
    double costForOneServer = cost1 + cost2;
    double totalfoodcost = w.get_number_of_guests() * ee.CostOfDinner;
    double averagecost = totalfoodcost / w.get_number_of_guests();
    double totalcost = totalfoodcost + (costForOneServer * NoOfServer);

    cout << "**************************event estimation for " << w.get_name() << "**************************" << endl;

    cout << "number of server: " << NoOfServer << endl;
    cout << "the cost for a server: " << costForOneServer << endl;

    cout << "the cost for the food is: " << totalfoodcost << endl;
    cout << "average cost per person:" << averagecost << endl << "\n";

    cout << "total cost: " << totalcost << endl;

    cout << "please deposit 25% amount to reserve the event" << endl;
    cout << "the deposit needed is: " << totalcost * 0.25;

    return 0;
}

