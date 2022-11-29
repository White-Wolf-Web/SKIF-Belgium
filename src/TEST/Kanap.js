
export default function Kanap() {
    const reponse = fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",        
        headers: {
        "content-type": "application/json",
          "accept": "application/json"
        },
    });
    reponse
    .then(async response => {
        console.log(reponse);
        try {
        const users = await response.json();
        console.log(users);
        
        }
        catch (e) {
            console.log(e)
        }
   
    })
   .catch (err => console.error(err));

   return (
<div>
<ul>
                    {reponse.map((item) => (
                        <li key={reponse.id}>{reponse.name}</li>
                    ))}
                </ul>
</div>

   )
    }





/*
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




        https://skifb-admin.be/api/CalendarAPI/GetCalendarTEST
*/