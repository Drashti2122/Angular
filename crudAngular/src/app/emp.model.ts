export class Employee {
  public ename!: string;
  public edob!: string;
  public edept!: string;

  constructor(ename: string, edob: string, edept: string) {
    this.ename = ename;
    this.edob = edob;
    this.edept = edept;
  }
}
