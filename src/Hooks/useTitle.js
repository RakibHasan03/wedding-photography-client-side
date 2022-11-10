const { useEffect } = require("react");

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - PIXEL-FLASH`;
    }, [title])
}
export default useTitle;
