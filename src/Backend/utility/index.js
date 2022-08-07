const Secret="alok345"
const genToken=async ()=>{
 return token =jwt.sign({
        data: 'foobar'
      }, Secret, { expiresIn: '10m' });
}

module.exports={genToken}