import {dbConnect} from "@/lib/dbConnect";
import Contact from "@/modal/Contact";

export async function POST(request:Request) {
    await dbConnect()
    const {name,email,message} = await request.json()

    try {
        const newContact = new Contact({ name, email, message, date: new Date() });
        await newContact.save()

        return Response.json({
            success:true,
            message:"Message sent successfully"
        },
            {status:200}
        )

        
    } catch (error) {
        console.error(error,"Error sending message")
        return Response.json({
            success:false,
            message:"Error sending message"
        },
            {status:500}
        )
    }
}