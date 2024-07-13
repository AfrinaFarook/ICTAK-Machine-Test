import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import react,{useState} from 'react'

const Add = () => {

    const [form,setForm]=useState(
      {
        product_name:"",
        description:"",
        price:"",
        category:""
      }
    )

    let setData=()=>{
        console.log(form);
    }

    function valueFetch(e){
        setForm({...form, [e.target.name]:e.target.value})
    }

    return (
    
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', width: '25ch', gap: '16px',paddingLeft:"35%"}}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="p_name"
        label="Product Name"
        variant="filled"
        name="product_name"
        
        value={form.product_name}
        onChange={valueFetch}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
       
      />
      <TextField
        id="description"
        label="Description"
        variant="filled"
        name="description"
        value={form.description}
        onChange={valueFetch}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />
      <TextField
        id="price"
        label="Price"
        variant="filled"
        name="price"
        value={form.price}
        onChange={valueFetch}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />

    <TextField
        id="category"
        label="Category"
        variant="filled"
        name="category"
        value={form.category}
        onChange={valueFetch}
        
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />


      <Stack spacing={2} direction="row">
      <Button 
      onClick={setData}
      variant="Contained" 
      sx={{backgroundColor:"grey"}}>
        SUBMIT
        </Button>
    </Stack>
    </Box>
            )
}

export default Add;