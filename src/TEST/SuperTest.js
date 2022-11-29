

export default function SuperTest() {
    const reponse = fetch("https://jsonplaceholder.typicode.com/users");
    reponse
    .then(async response => {
        console.log(reponse);
        try{
            const reponseJson = await reponse.json();
            console.log(reponseJson);
        } catch (err) {
            console.error(err);
            }

    })

       return (
           console.log("1er etape reuussi")
           
        )

}
