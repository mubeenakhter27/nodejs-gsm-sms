let serialportgsm = require('serialport-gsm');

let modem = serialportgsm.Modem()
let options = {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    rtscts: false,
    xon: false,
    xoff: false,
    xany: false,
    autoDeleteOnReceive: true,
    enableConcatenation: true,
    incomingCallIndication: true,
    incomingSMSIndication: true,
    pin: '',
    customInitCommand: '',
    logger: console
}

modem.open('COM5', options, {});

modem.on('open', data => {	
    // modem.setModemMode(callback, 'PDU')	
    modem.initializeModem((data) =>{
        console.log('niden us initialized');
        //send sms
        modem.sendSMS('+923238863200', 'Hello mubeen!', true, (data)=>{
            console.log(data);
        })
    });
})