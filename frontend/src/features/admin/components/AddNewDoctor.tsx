export interface DoctorFormEntry {
    name: string;
    email: string;
}
export default function AddNewDoctor(props: { onSubmit?: (entry:DoctorFormEntry) => void , onClose?: () => void }) {
    return (
        <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Add New Doctor</h1>
        {/* Add form or components to add a new doctor here */}
        
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter doctor's name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter doctor's email" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={()=>{
                    props.onSubmit? props.onSubmit({ name: '', email: '' }) : null;
                }}
            >Save Doctor</button>
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={()=>{
                    props.onClose && props.onClose();
                }}
            >Cancel</button>

        </form>
        </div>
    );
}