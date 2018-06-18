package src;

import java.util.Scanner;
public class log {

	public static void main(String[] args) {
		Scanner input = new Scanner (System.in);
		   String username;
		   String password;
		   boolean User=false;
		   boolean Pass=false;
		   boolean identification=false;
		   int ID=0;
		    
		    //content
		    String studentName[]={"nabi001","lacc002","heun003","deva004","rhai005","ahar006","nler007","aran008","hryu009","awar010","cwhe011","cwri012"};
		    String studentPass[]={"nasaiah","idracca","nue","snave","arabiah","nosirrah","enaifarel","arednar","uyr","nerraw","gnehw","thgirw"};
		    String fullName[]={"Nasaiah Abidi", "Lucio Accardi", "Haneul Eun", "Declan Evans", "Ren Haibara", "Annabelle Harrison", "Nadarie Lerafîané", "Augala Randera", "Haeju Ryu", "Aida Warren", "Charlie Wheng", "Camryn Wright"};
		    int studentID[]={121102,061302,040102,030200,696969,070602,140104,061302,061303,021302,051502,030113,};
		    //end
		    //basic login
			 System.out.println("Please provide the following information(remember not to use accents, and make everything lowercase!)-");
			    System.out.println("School username: \n");
			    username = input.next();

			    System.out.println("School password: \n");
			    password = input.next();

			    //users check = new users(username, password);
			    for(int x=0;x<studentName.length;x++){
			    	//user and pass work
			    if(username.equals(studentName[x]) && password.equals(studentPass[x])){ 
			    	User=true;
			    	Pass=true;
			    	identification=true;
			        System.out.println("Welcome, "+fullName[x]+"!");
			        System.out.println("Remember, your username is "+studentName[x]+", and your student ID is #"+studentID[x]+".");
			        }
			    //right pass, wrong user
			    else if((!username.equals(studentName[x])) && password.equals(studentPass[x])){
			    	User=false;
			    	Pass=true;
			    	System.out.println("It seems you've entered the wrong username. Could you please enter your student ID instead?"); 
			    	ID = input.nextInt();
			    	System.out.println(".. and your password: \n");
				   String pass2 = input.next();
				    for(int y=0;y<studentName.length;y++){
			    	 if(ID==(studentID[y]) && pass2.equals(studentPass[y])){
			    		 	identification=true;
					    	Pass=true;
					    	User=true;
					        System.out.println("Welcome, "+fullName[y]+"!");
					        }
					       }
			    }
			    //wrong password
			    }
			    if(User==true&&Pass==false||identification==false&&Pass==true||User==false&&Pass==false||identification==false&&Pass==false){
		    	System.out.println("If you've forgotten your password, please contact Amina."); 
			    }
		}
			
	  
	}


