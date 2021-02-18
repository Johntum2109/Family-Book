// variables
    var Images = [
        "https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg",
        "https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860-dragon-header-iStock-494839519.gif",
        "https://screenfiction.org/content/image/0/63/990/bfc9d54a-full.webp",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ed67663-df82-4759-a0fc-c35b3a299270/d8lnvul-d59d6271-48e3-41ae-a447-7240ebcf12d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGVkNjc2NjMtZGY4Mi00NzU5LWEwZmMtYzM1YjNhMjk5MjcwXC9kOGxudnVsLWQ1OWQ2MjcxLTQ4ZTMtNDFhZS1hNDQ3LTcyNDBlYmNmMTJkOC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.rTDdFWN-gzB_r2QEIqtBBIoRzoVsSM4wxktc0vCTNE8",
        "https://i.ytimg.com/vi/Q0ZRWCEIWho/maxresdefault.jpg"
    ];
    var Names = ["Family Book","Robin(Dad)", "Jenny(Mom)", "Jayden(Brother)", "John(Me)"];

    var x = 0;

// Images
    document.getElementById("IMAGE").src = Images[x];
    document.getElementById("name").innerHTML = Names[x];

// Next
    function Next() 
    {
        if ( x == 0 ) 
        {
            x = 4;
        } else 
        {
            x = x - 1;
        }

        // Change Image
        document.getElementById("IMAGE").src = Images[x];

        // Change Name
        document.getElementById("name").innerHTML = Names[x];
    }

// Previous
    function Previous() 
    {
        if ( x == 4 ) 
        {
            x = 0;
        } else 
        {
            x = x + 1;
        }

        // Change Image
        document.getElementById("IMAGE").src = Images[x];

        // Change Name
        document.getElementById("name").innerHTML = Names[x];
    }

// console
    console.log(Images);
    console.log(Names);