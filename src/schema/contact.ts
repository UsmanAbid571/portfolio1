import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(3,{message: "Name must be at least 3 characters long"}).regex(/^[a-zA-Z\s]+$/, {message: "Name can only contain letters and spaces"}),
    email: z.string().email({message:"Invalid email address"}),
    message: z.string().min(5,{message: "Message must be at least 5 characters long"}),
});