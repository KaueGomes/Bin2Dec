function BinaryToDecimal(binValue)
{
	var bin2dec = binValue;
	var decimal = 0;
	console.log(bin2dec);
     			
	if (bin2dec.length > 8)
		{
			throw "O valor é maior que 8 digitos";
		}

	if (bin2dec.length < 8)
	{
		for (var k = bin2dec.length+1 ; k > 8 ; k++ )
		{
		bin2dec[k] = 0;
		console.log(bin2dec[k]);
		}
	}

	for (var i = bin2dec.length-1 ; i >= 0 ; i--)
	{
		if (Number(bin2dec[i]) !== 0 && Number(bin2dec[i]) !== 1)
		{
			throw "O valor não é um binário";
		}
		else
		{
			for (i = bin2dec.length-1 ; i >= 0 ; i--)
			{
				decimal += parseInt(bin2dec[i]*Math.pow(2,bin2dec.length-1-i));
			}
		
			return decimal;
		
		}
	}

}
// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = BinaryToDecimal;
}