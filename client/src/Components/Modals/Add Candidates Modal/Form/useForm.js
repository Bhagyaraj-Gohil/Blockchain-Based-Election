import { useState } from 'react';
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

const useForm = ({ setShowModal, contract, currentAccount }) => {
  const [values, setValues] = useState({
    name: '',
    description: ''
  });

  const [file, setfile] = useState(null);

  const handleChange = e => {
    if(e.target.name === 'image')
    {
        const fileUploaded = e.target.files[0];
        setfile(fileUploaded);
    }
    else
    {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(values['name'] === '' || values['description'] === '' || file === null)
    {
      alert("All the fields are required!");
      return;
    }
    ipfs.add(file)
    .then(result => {
        var path = "ipfs.infura.io/ipfs/" + result['path'];
        contract.methods.addCandidate(values['name'], values['description'], path).send({from: currentAccount})
        .then(()=>{
          setShowModal();
          alert(values['name'] + " added to the Election.");
          window.location.reload(false);
        })
    })
  };

  return { handleChange, handleSubmit, values };
};

export default useForm;