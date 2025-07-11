 export const getUser = ( req,res )=>{   
    res.send(users)
    
};

export const getIdUser = (req,res)=>{
    const { id } = req.params;
    const foundUser =  users.find((user)=>user.id===id);
    res.send(foundUser)
};

export  const postUser = (req,res)=>{
    try {
        const user = req.body;
        const newUser = {...user,id:uuidv4()}
        user.push(newUser)
        // res.status(200).json({success:true})
        res.send(`user with the name ${user.firstname} added the database`)
    }catch(error){
        res.status(400).json({error,message:"There is some error"})
    }
}



export const  deleteUser = (req,res)=>{
    const {id}= req.params;
    users = users.filter((user)=>user.id!==id)
    res.send(`This User Id ${id} Deleted`)
}



export const patchUser = (req,res)=>{
    const {id} = req.params;
    const {firstname,lastname,age}=req.body;
    users = users.find((users)=>users.id===id)
    if(firstname) users.firstname=firstname;
    if(lastname) users.lastname=lastname;
    if(age) users.age=age;
    res.send(`the User ${id} Updated..!`)
}