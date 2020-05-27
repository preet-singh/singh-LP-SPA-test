window.lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes||[];
clickSupport = () => {
  lpTag.newPage('http://localhost:3030/support', {
    section : [  
      "support-2",  //CAN BE A SECTION OR A SUB-SECTION
    ]
  },
  )
  lpTag.sdes.push(
    {
        "type": "ctmrinfo",  //MANDATORY
        "info": {
            "cstatus": "cancelled",  //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
            "ctype": "vip",  //CUSTOMER TYPE OR TIER. FROM PRE-DEFINED LIST
            "customerId": "138766AC",  //UNIQUE CUSTOMER IDENTIFIER
            "balance": 1000000000.00,  //THE CUSTOMER FINANCIAL BALANCE IN DECIMAL VALUE
            "role": "SUPPORT",  //CONSUMER ROLE TITLE
            "registrationDate": {
                  "day": 15,  //THE DAY OF THE REGISTRATION NUMERIC VALUE
                  "month": 1,  //THE MONTH OF THE REGISTRATION NUMERIC VALUE
                  "year": 1975  //THE YEAR OF THE REGISTRATION NUMERIC VALUE
            }
        },
    }),
    lpTag.sdes.push(
    {
        "type": "personal",
            "personal": {
            "firstname": "Leia",
            "lastname": "Skywalker",
            "age": {
               "age": 79,
               "year": 1940,
               "month": 4,
               "day": 15
           },
            "contacts": [{
               "email": "Leia@force.com",
               "phone": "+1 713-713-7137"
           }],
            "gender": "FEMALE",
        }
    }
  );
}