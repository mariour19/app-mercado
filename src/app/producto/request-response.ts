export interface ReqRes {
     title: string;
    price:string;
    pictures: Picture[];
    plain_text: string;
}

 interface Picture {
    id:         string;
    url:        string;
    secure_url: string;
    size:       string;
    max_size:   string;
    quality:    string;
}
