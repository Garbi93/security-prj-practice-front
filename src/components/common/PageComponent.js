import React from "react";

function PageComponent({ serverData, movePage }) {
  // serverData.prev -> 이전 , pageNumList -> 페이지 목록 , next -> 다음

  return (
    <div className={"m-6 flex justify-center"}>
      {serverData.prev ? (
        <div
          className={"m-2 p-2 w-16 text-center font-bold text-blue-400"}
          onClick={() => movePage({ page: serverData.prevPage })}
        >
          Prev
        </div>
      ) : (
        <></>
      )}

      {serverData.pageNumList.map((pageNum) => (
        <div
          key={pageNum}
          className={`m-2 p-2 w-12 text-center rounded shadow-md text-white ${serverData.current === pageNum ? "bg-gray-500" : "bg-blue-400"}`}
          onClick={() => {
            movePage({ page: pageNum });
            console.log(serverData);
          }}
        >
          {pageNum}
        </div>
      ))}

      {serverData.next ? (
        <div
          className={"m-2 p-2 w-16 text-center font-bold text-blue-400"}
          onClick={() => movePage({ page: serverData.nextPage })}
        >
          Next
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PageComponent;
