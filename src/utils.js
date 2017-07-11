export function getQueryParamByName(name, url) {
    name = name.replace(/[[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function stripEdges({edges}) {
	return edges.map(stripEdge);
}
export function stripEdge({node}) {
	return node;
}

export function splitFilter(array, check) {
	return array.reduce((result, item) => {
		check(item) ? result[0].push(item) : result[1].push(item);
		return result;
	}, [[],[]]);
}
