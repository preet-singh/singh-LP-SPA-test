window.lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes||[];
clickCare = () => {
  lpTag.newPage('http://localhost:3030/care', {
    section : [  
      "care-2",  //CAN BE A SECTION OR A SUB-SECTION
    ]
  },
  )
  lpTag.sdes.push(
    {
        "type": "ctmrinfo",  //MANDATORY
        "info": {
            "cstatus": "active",  //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
            "ctype": "migragted",  //CUSTOMER TYPE OR TIER. FROM PRE-DEFINED LIST
            "customerId": "138766AC",  //UNIQUE CUSTOMER IDENTIFIER
            "balance": 1000000000.00,  //THE CUSTOMER FINANCIAL BALANCE IN DECIMAL VALUE
            "role": "CARE",  //CONSUMER ROLE TITLE
            "registrationDate": {
                  "day": 30,  //THE DAY OF THE REGISTRATION NUMERIC VALUE
                  "month": 12,  //THE MONTH OF THE REGISTRATION NUMERIC VALUE
                  "year": 1998  //THE YEAR OF THE REGISTRATION NUMERIC VALUE
            }
        },
    }),
  lpTag.sdes.push(
    {
        "type": "personal",
            "personal": {
            "firstname": "Luke",
            "lastname": "Skywalker",
            "age": {
               "age": 79,
               "year": 1940,
               "month": 4,
               "day": 15
           },
            "contacts": [{
               "email": "Luke@force.com",
               "phone": "+1 713-713-7137"
           }],
            "gender": "MALE",
        }
    }
  );
}