import express from 'express';
import { Request,Response } from 'express';
const PORT=process.env.PORT || 5000;
const app=express();

app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({
    message:"hello server has started"
    })
});

app.listen(PORT,()=>{
    console.log(`server has started on http://localhost:${PORT}`);
})

export default app;
