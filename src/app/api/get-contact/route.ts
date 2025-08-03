import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/modal/Contact";


export async function GET() {
    await dbConnect()

    try {
        const contact = await Contact.find().sort({ createdAt: -1 });

        return Response.json({success:true,data:contact},{status:200})

    } catch (error) {
        console.error(error,"Error getting contact")
        return Response.json({success:false,message:"Error getting contact"},{status:500})
    }

}