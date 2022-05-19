const maillist = ['', '', '']
function validateEmails(maillist) {
    //sekoj zbor w korisnicki e-mail
    //funkcijava treba da proveri dali sekoj od mejlovite e validen
    //validen mail e toj mail sto ima karakter "@", ".com" ili ".net" i "nema prazni mesta vo nego"
    //otkako ke zavrsi proverkata, treba da se ispecatat site mailovi sto NE SE VALIDNI (ako ima takvi)
    //ako nema, pecatime OK

    const invalidEmails = maillist.filter((email) => {
        if (!email.includes('@')) {
            return true
        }
        if (!email.includes('.com') && !email.includes('.net')) {
            return true
        }

        if (email.includes(' ')) {
            return true
        }

        return false
    })
    console.log(invalidEmails)
}

validateEmails ([
    'cece@yahoo.com',
    'test123@.com'
])


function capitalizeNames (nameList) {
    // da se napise funkcija koja sto ke prima lista od iminja
    // Funkcijata treba da proveri dali site iminja zapocnuvaat so golema bukva i ako ne, togas da ja napravi golema
    // Site ostanati bukvi, treba da se pretvorat vo mali
    // Dokolku celosnoto ime sodrzi i prezime, togas istite pravila vazat i za prezimeto
    // (mora da pocnuva so golema bukva i site ostanati da se mali)
    // Na kraj da se ispecati nizata od transformirani iminja

    const modifiedNames = []
    const names = ['Stefani', 'Aleksandar', 'Damjan']
    // mora da imam loop za izminuvanje na nizata
    for (let newName of names) {
        let newName = name.toLowerCase()
        console.log(newName)

        //za imeto
        newName = newName.replace(newName.charAt(0), newName.charAt(0).toUpperCase())

        //za prezimeto
        //prvo mora da go najdeme kade e praznoto mesto
        //karakterot sto se naoga posle nego e prvata bukva od prezimeto

        let emptySpacePosition = newName.indexOf('')
        newName = newName.replace

        modifiedNames.push(newName)
        // if (//zbor ne pocnuva so golema bukva) {
        // // napravi go bukvata da bide golema
        // }
    // site ostanati bukvi

    // vo novata niza go stavam izmenetiot element (.push)
    }
    console.log(modifiedNames)

}


