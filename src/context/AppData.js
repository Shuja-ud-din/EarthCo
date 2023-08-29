import { createContext, useState } from "react";

const DataContext = createContext();

const DataFun = ({ children }) => {

    const [singleObj, setSingleObj] = useState();
    const [singleSR, setSingleSR] = useState();

    const [estimates, setEstimates] = useState([
        {
            estimateID: 1000,
            customerName: 'Crest DeVille',
            issuedDate: '7 / 10 / 2023',
            approvedTotal: 4105.00,
            SRstatus: 'Open',
            serviceRequest: 'Estimate (#',
            QBstatus: 'Not Sent',
            status: 'Sent'
        },
        {
            estimateID: 1001,
            customerName: 'Sea Summit',
            issuedDate: '4 / 07 / 2023',
            approvedTotal: 1175.20,
            SRstatus: 'Closed',
            serviceRequest: 'Estimate (#',
            QBstatus: 'Not Sent',
            status: 'Sent'
        },
        {
            estimateID: 1002,
            customerName: 'Bella Palermo',
            issuedDate: '2 / 09 / 2023',
            approvedTotal: 3104.02,
            SRstatus: 'Open',
            serviceRequest: 'Estimate (#',
            QBstatus: 'Not Sent',
            status: 'Sent'
        },
        {
            estimateID: 1003,
            customerName: 'Valmont',
            issuedDate: '7 / 10 / 2023',
            approvedTotal: 3904.02,
            SRstatus: 'Open',
            serviceRequest: 'Estimate (#',
            QBstatus: 'Ready to Send',
            status: 'Sent'
        },
        {
            estimateID: 1004,
            customerName: 'Promenade',
            issuedDate: '2 / 10 / 2023',
            approvedTotal: 2994.02,
            SRstatus: 'Closed',
            serviceRequest: 'Estimate (#',
            QBstatus: 'Not Sent',
            status: 'Sent'
        },
        {
            estimateID: 1005,
            customerName: 'Highland Park',
            issuedDate: '2 / 09 / 2023',
            approvedTotal: 3104.02,
            SRstatus: 'Open',
            serviceRequest: 'Estimate (#',
            QBstatus: 'Not Sent',
            status: 'Sent'
        }
    ]);

    const [customers, setCustomers] = useState([
        {
            customerId: 1,
            name: 'Sunrise Lane',
            email: 'mark334@gmail.com',
            phone: '+91 123 456 7890',
            fullAdress: 'Joyce Lee',
            serviceLocations: [
                'Los Angeles',
                'Boulder View',
                'Irvine, CA'
            ]
        },
        {
            customerId: 2,
            name: 'Wakeham',
            email: 'danm@earthcompany.org',
            phone: '+91 123 456 7890',
            fullAdress: 'Teresa Brim ',
            serviceLocations: [
                'Teresa Brim',
                'Realty, US'
            ]
        },
        {
            customerId: 3,
            name: 'Hillandale Ave',
            email: 'Jchavis@keystonepacific.com',
            phone: '+91 123 456 7890',
            fullAdress: 'Jeremy Chavis',
            serviceLocations: [
                'Jeremy Chavis',
                'Keystone Pacific',
                'Property Mamagement, US'
            ]
        },
        {
            customerId: 4,
            name: 'Crest DeVille',
            email: 'aspyn@marandassociates.com',
            phone: '+91 123 456 7890',
            fullAdress: 'Aspyn Remington',
            serviceLocations: [
                'Aspyn Remington',
                'Newport Pacific, US'
            ]
        },
        {
            customerId: 5,
            name: 'Sea Summit',
            email: 'Devon511586@gmail.com',
            phone: '+91 123 456 7890',
            fullAdress: 'Devon',
            serviceLocations: [
                'Devon',
                'Newport Pacific, US'
            ]
        },
        {
            customerId: 6,
            name: 'Bella Palermo',
            email: 'Jsttp@aol.com',
            phone: '+91 123 456 7890',
            fullAdress: 'Brian Jacobs',
            serviceLocations: [
                'Brian Jacobs',
                'Jacobs Construction, US'
            ]
        },
        {
            customerId: 7,
            name: 'Valmont',
            email: 'Kaitlyn.Scott@springwisefm.com',
            phone: '+91 123 456 7890',
            fullAdress: 'Danny Lemansky',
            serviceLocations: [
                'Danny Lemansky',
                'Park Ave, 433',
                'Tustin, CA'
            ]
        },
        {
            customerId: 8,
            name: 'Promenade',
            email: 'Mmayer@smes.org',
            phone: '+91 123 456 7890',
            fullAdress: 'Danny Lemansky',
            serviceLocations: [
                'Danny Lemansky',
                'Park Ave, 433',
                'Tustin, US'
            ]
        },
        {
            customerId: 9,
            name: 'Highland Park',
            email: 'ezequiel.rubin@outlook.com',
            phone: '+91 123 456 7890',
            fullAdress: 'Danny Lemansky',
            serviceLocations: [
                'Danny Lemansky',
                'Park Ave, 433',
                'Tustin, US'
            ]
        }
    ]);

    const [serviceRequests, setServiceRequest] = useState([
        {
            ID: "SR-1001",
            type: 'Monthly Maintainence Report',
            assign: 'Vincente, Allan',
            customer: 'Sunrise Lane',
            status: 'Closed',
            created: '1/17/2014 4:29 PM',
            estimateTotal: 30.0,
            description: '14 IG ROSEMARY PROSTRATA',
            proposalNo: 'OC-91014-02',
            workRequested: 'This proposal is to install Jute for the protection of the bare areas on the slopes.'
        },
        {
            ID: "SR-1002",
            type: 'Weekly Maintainence Report',
            assign: 'Vincente, Allan',
            customer: 'Hillandale Ave',
            status: 'Open',
            created: '5/12/2022 4:29 PM',
            estimateTotal: 90.5,
            description: 'TREE REMOVAL',
            proposalNo: 'OC-910883-09',
            workRequested: 'This proposal is to trim all the Melelueca and California Pepper trees throughout the community.'
        }
    ]);

    const [contacts, setContacts] = useState([]);

    const [wReportData, setWReportData] = useState([
        {
            id: 742246,
            assign: 'Vincente, Allan',
            customer: 'Wakeham',
            status: 'Closed',
            created: '1/17/2014 4:29 PM',
            estTotal: '$0.00',
            workRequested: 'hrthsertae'
        }
    ])

    const [estimateItems, setEstimateItems] = useState([
        {
            id: 'item1',
            name: '05GP',
            qty: 10,
            description: '5 Gallon Plant - Carissa m. Green Carpet',
            rate: 38.00,
            tax: 'Non',
        }
    ])

    const [loggedUser, setLoggedUser] = useState([])


    return (
        <DataContext.Provider value={{ loggedUser, setLoggedUser, contacts, setContacts, estimates, setEstimates, customers, setCustomers, singleObj, setSingleObj, serviceRequests, setServiceRequest, singleSR, setSingleSR, estimateItems, setEstimateItems, wReportData, setWReportData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataFun;
export { DataContext };