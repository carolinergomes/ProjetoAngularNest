import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dog } from '../../model/dog';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-cadastro',
  templateUrl: './page-cadastro.component.html',
  styleUrls: ['./page-cadastro.component.css']
})
export class PageCadastroComponent {

  // public petForm: FormGroup;

  hide= true;
  dog!: Dog;
  submitted=false;
  dogForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dogService: ServiceService,
    private _router: Router,

    ) {}
    ngOnInit(): void {
    this.dog = {   
    nome: '',
    raca: '',
    idade :0 ,
    porte:''

 };
 this.dogForm = new FormGroup({
  nome: new FormControl('', [Validators.required]),
  raca: new FormControl('', [Validators.required]),
  idade: new FormControl('', [Validators.required]),
  porte: new FormControl('', [Validators.required])
});
}

//enviar formulario atras do click methodo
onSubmit(form: FormGroup) {
  if(form.valid){
    // console.log('Valid?', form.valid); // true or false

    this.mapFormValuesToAlunoModel();



//mostra no terminal mudança

    this.dogService.save(this.dog).subscribe({
      next: (dog) => {
        this._router.navigate(['cadastrados']);

      },
      error: (err: any) => console.log(err)
    }
  );


  } else {
    console.log('preencha os campos obrigatórios')

  }
}
mapFormValuesToAlunoModel() {

  this.dog.nome = this.dogForm.value.nome;
  this.dog.raca = this.dogForm.value.raca;
  this.dog.idade = this.dogForm.value.idade;
  this.dog.porte = this.dogForm.value.porte;
  

}


}
   
    
  

