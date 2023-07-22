function getCurrentTempInC(data){
    return (data.current.temp_c);
};

function getCurrentTempInF(data){
    return data.current.temp_f
};

export { getCurrentTempInC, getCurrentTempInF }