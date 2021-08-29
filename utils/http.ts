export async function httpGet<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

export async function httpBulkPut<T>(
  request: RequestInfo,
  data: T[]
): Promise<T[]> {
  let result: T[] = [];
  result = await Promise.all(
    data.map(async (d) => {
      const response = await fetch(`${request}/${d.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ block: d.block, position: d.position }),
      });
      const body = await response.json();
      return body;
    })
  );
  console.log(result);
  return result;
}
