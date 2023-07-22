function getCurrentConditionText(data){
    return (data.current.condition.text);
};

function getCurrentConditionIcon(data){
    return (data.current.condition.icon);
};

export { getCurrentConditionText, getCurrentConditionIcon }