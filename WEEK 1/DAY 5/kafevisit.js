
var name = 'kisra'
var age = 15
var money = 400000


if (name){ console.log('anda boleh masuk '+ name )
    if (age >= 17){ console.log('anda boleh pesan Anggur')
        if (money >= 30000){ console.log('sisa uang anda '+[money-30000])}
        else { console.log('Uang anda tidak cukup')}}
    else if (age <= 17) {console.log ('anda hanya boleh pesan Juice. harga Juice 50000')
        if (money >= 50000) {console.log('sisa uang anda '+[money-50000])}
        else { console.log('Uang anda tidak cukup. Anda harus pulang')}}
    else { console.log('anda hanya boleh pesan Juice. Harga Juice 50.000')}}
else { console.log('anda tidak boleh masuk')}

//peudoode 

// SET VARIABLE NAME WITH ANY VALUE of STRING
// SET VARIABLE AGE WITH ANY VALUE of NUMBER 
// SET VARIABLE MONEY WITH ANY VALUE of MONEY

//  DO WRITE NAME
// DO WRITE AGE
// DO WRITE AGE 
// IF NAME IS WRITE
// 	    DISPLAY ANDA BOLEH MASUK 
//      CHECK AGE
//      IF AGE MORE THAN EQUAL 17 
// 	        DISPLAY  'HANYA BISA PESAN ANGGUR . HARGA ANGGUR 30.000'
//   	    CHECK MONEY 
// 	        IF MONEY MORE THAN 30000  
//   	         DO CALCULATE MONEY - 30000 AS RESULT 	CASHBACK
//          DISPLAY ANDA BISA PESAN MINUM. AND CHASHBACK
//          IF MONEY LESS THAN 30000 
// 	        DISPLAY 'UANG ANDA TIDAK CUKUP ANDA HARUS PULANG' 
//          END IF
//      ELSE IF AGE LESS THAN 17 
// 	    DO CHECK MONEY 
// 	        IF MONEY MORE THAN 50000  
// 		        DO CALCULATE MONEY - 50000 AS RESULT CASHBACK
// 		    DISPLAY ANDA BISA PESAN MINUM. AND CHASHBACK
//          IF MONEY LESS THAN 50000 
//          DISPLAY 'UANG ANDA TIDAK CUKUP ANDA HARUS PULANG' 
//          END IF
//      IF AGE LESS THAN 17
// 	    DISPLAY HANYA BISA PESAN JUICE . HARGA JUICE 50.000 
// IF NAME NOT WRITE 
// 	    DISPLAY ANDA TIDAK BOLEH MASUK 
// 