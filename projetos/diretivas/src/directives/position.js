export default{
    created(el, binding){
        console.log(el, binding.arg, binding.value);
        const possiblePositions = ["relative", "fixed", "absolute"];

        if(possiblePositions.includes(binding.arg)){
            el.style.position = binding.arg;
            el.style.top = `${binding.value}px`;
        }
    }
}