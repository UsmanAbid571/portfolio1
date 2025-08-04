import {dbConnect} from "@/lib/dbConnect";
import Services from "@/modal/Services";

export async function POST(request:Request) {
    await dbConnect()
    const {name,email,phone,websiteDetails,description} = await request.json()

    try {
        const newService = new Services({ name, email, phone, websiteDetails, description, date: new Date() });
        await newService.save()

        return Response.json({
            success:true,
            message:"Sent Successfully"
        },
            {status:200}
        )

        
    } catch (error) {
        console.error(error,"Error sending message")
        return Response.json({
            success:false,
            message:"Something went wrong. Please try again."
        },
            {status:500}
        )
    }
}