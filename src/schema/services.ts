import { z } from "zod";

export const servicesSchema = z.object({
    name: z.string().min(3,{message: "Name must be at least 3 characters long"}).regex(/^[a-zA-Z\s]+$/, {message: "Name can only contain letters and spaces"}),
    email: z.string().email({message:"Invalid email address"}),
    phone: z.string().min(7,{message: "Phone number must be at least 7 characters long"}).regex(/^[0-9]+$/, {message: "Phone number can only contain numbers"}),
    websiteDetails: z.string().min(5,{message: "Details must be at least 5 characters long"}),
    description: z.string().min(5,{message: "Message must be at least 5 characters long"}).max(1000,{message: "Message must be at most 1000 characters long"}),
});