window.lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes||[];
clickIndex = () => {
  lpTag.newPage('http://localhost:3030/', {
    section : [  
      "index",  //CAN BE A SECTION OR A SUB-SECTION
    ]
  },
  )
  lpTag.sdes.push(
    {
        "type": "ctmrinfo",  //MANDATORY
        "info": {
            "cstatus": "active",  //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
            "ctype": "vip",  //CUSTOMER TYPE OR TIER. FROM PRE-DEFINED LIST
            "customerId": "138766AC",  //UNIQUE CUSTOMER IDENTIFIER
            "balance": 1000000000.00,  //THE CUSTOMER FINANCIAL BALANCE IN DECIMAL VALUE
            "role": "INDEX",  //CONSUMER ROLE TITLE
            "registrationDate": {
                  "day": 23,  //THE DAY OF THE REGISTRATION NUMERIC VALUE
                  "month": 5,  //THE MONTH OF THE REGISTRATION NUMERIC VALUE
                  "year": 2013  //THE YEAR OF THE REGISTRATION NUMERIC VALUE
            }
        },
    },
    {
        "type": "personal",
            "personal": {
            "firstname": "Anakin",
            "lastname": "Skywalker",
            "age": {
               "age": 99,
               "year": 1920,
               "month": 4,
               "day": 15
           },
            "contacts": [{
               "email": "darth@vader.com",
               "phone": "+1 713-713-7137"
           }],
            "gender": "MALE",
        }
    }
  );
}