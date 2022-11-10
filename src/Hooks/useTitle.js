const { useEffect } = require("react");

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Weeding Photography`;
    }, [title])
}
export default useTitle;
