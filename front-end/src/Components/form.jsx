import React  , {useState} from "react";
import './formpage.css'

const FormPage=()=>{
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState('');
    
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        console.log("Sending...");
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('author', author);
        formData.append('location', location);
        formData.append('description', description);
    
        fetch('https://instaclone-backend-5fzk.onrender.com/api/submit', {
            method: 'POST',
            body: formData,
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // }
        })
        .then(response => {
            if (response.ok) {
                // Redirect the user to a different page
                window.location.href = "https://instaclone-e87b.onrender.com/user";
            } else {
                // Handle any errors that occurred
                console.error('An error occurred:', response.statusText);
            }
        })
        .then(data => {
            console.log(data);
            // Handle the response from the server
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <input type="file" onChange={handleImageChange} accept="image/*" required/>
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            <button type="submit">Submit</button>
        </form>
    );
}
export default FormPage;