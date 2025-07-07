#include<iostream>
#include<cmath>
using namespace std;

class wedding {
protected:
    string first_name;
    string last_name;
    int number_of_guests;
    double number_of_minutes;

public:
    void wedding_data() {
        cout << "enter the customer first and last name: " << endl;
        cin >> first_name >> last_name;

        cout << "enter the number of guests: " << endl;
        cin >> number_of_guests;
        cout << "\n\n";
        cout << "enter the number of minutes in the event: " << endl;
        cin >> number_of_minutes;
    }

    void set_name(string f_n, string l_n) {
        first_name = f_n;
        last_name = l_n;
    }

    string get_name() {
        return first_name + " " + last_name;
    }

    int get_number_of_guests() const {
        return number_of_guests;
    }

    double get_number_of_minutes() const {
        return number_of_minutes;
    }
};

class event_cost_estimation : public wedding {
public:
    const double CostPerHour = 18.50;
    const double CostPerMinute = 0.40;
    const double CostOfDinner = 20.70;

    double NoOfServer;
    double cost1;
    double cost2;
    double cost_for_one_server;
    double total_food_cost;
    double average_cost;
    double total_cost;

    event_cost_estimation() : wedding() {
        // Move the calculations here, after the user has entered the data
        NoOfServer = ceil(static_cast<double>(get_number_of_guests()) / 20);
        cost1 = (get_number_of_minutes() / 60) * CostPerHour;
        cost2 = (static_cast<int>(get_number_of_minutes()) % 60) * CostPerMinute;
        cost_for_one_server = cost1 + cost2;
        total_food_cost = get_number_of_guests() * CostOfDinner;
        average_cost = total_food_cost / get_number_of_guests();
        total_cost = total_food_cost + (cost_for_one_server * NoOfServer);
    }

    double display_server() {
        return NoOfServer;
    }
};

class feveral {
public:
    feveral() {
        cout << "feveral event";
    }
};

int main() {
    event_cost_estimation ee;

    string event;
    cout << "**************************event management system**************************" << endl;
    cout << "enter the name of event :" << endl;
    cin >> event;
    if (event == "wedding") {
        ee.wedding_data();
    }
    else if (event == "feveral") {
        feveral();
    }
    else {
        cout << "wrong input";
        return 1; // Exiting the program if the input is wrong
    }

    // Costing
    cout << "**************************event estimation for " << ee.get_name() << "**************************" << endl;

    cout << "number of server: " << ee.display_server() << endl;
    cout << "the cost for a server: " << ee.cost_for_one_server << endl;
    cout << "the cost for the food is: " << ee.total_food_cost << endl;
    cout << "average cost per person: " << ee.average_cost << endl << "\n";
    cout << "total cost: " << ee.total_cost << endl;
    cout << "please deposit 25% amount to reserve the event" << endl;
    cout << "the deposit needed is: " << ee.total_cost * 0.25;

    return 0;
}
